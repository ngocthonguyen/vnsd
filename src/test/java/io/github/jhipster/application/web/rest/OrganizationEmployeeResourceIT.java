package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.VnsdApp;
import io.github.jhipster.application.domain.OrganizationEmployee;
import io.github.jhipster.application.repository.OrganizationEmployeeRepository;
import io.github.jhipster.application.repository.search.OrganizationEmployeeSearchRepository;
import io.github.jhipster.application.service.OrganizationEmployeeService;
import io.github.jhipster.application.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.kafka.test.context.EmbeddedKafka;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.Collections;
import java.util.List;

import static io.github.jhipster.application.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link OrganizationEmployeeResource} REST controller.
 */
@EmbeddedKafka
@SpringBootTest(classes = VnsdApp.class)
public class OrganizationEmployeeResourceIT {

    private static final String DEFAULT_ROLE = "AAAAAAAAAA";
    private static final String UPDATED_ROLE = "BBBBBBBBBB";

    @Autowired
    private OrganizationEmployeeRepository organizationEmployeeRepository;

    @Autowired
    private OrganizationEmployeeService organizationEmployeeService;

    /**
     * This repository is mocked in the io.github.jhipster.application.repository.search test package.
     *
     * @see io.github.jhipster.application.repository.search.OrganizationEmployeeSearchRepositoryMockConfiguration
     */
    @Autowired
    private OrganizationEmployeeSearchRepository mockOrganizationEmployeeSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restOrganizationEmployeeMockMvc;

    private OrganizationEmployee organizationEmployee;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final OrganizationEmployeeResource organizationEmployeeResource = new OrganizationEmployeeResource(organizationEmployeeService);
        this.restOrganizationEmployeeMockMvc = MockMvcBuilders.standaloneSetup(organizationEmployeeResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static OrganizationEmployee createEntity(EntityManager em) {
        OrganizationEmployee organizationEmployee = new OrganizationEmployee()
            .role(DEFAULT_ROLE);
        return organizationEmployee;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static OrganizationEmployee createUpdatedEntity(EntityManager em) {
        OrganizationEmployee organizationEmployee = new OrganizationEmployee()
            .role(UPDATED_ROLE);
        return organizationEmployee;
    }

    @BeforeEach
    public void initTest() {
        organizationEmployee = createEntity(em);
    }

    @Test
    @Transactional
    public void createOrganizationEmployee() throws Exception {
        int databaseSizeBeforeCreate = organizationEmployeeRepository.findAll().size();

        // Create the OrganizationEmployee
        restOrganizationEmployeeMockMvc.perform(post("/api/organization-employees")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(organizationEmployee)))
            .andExpect(status().isCreated());

        // Validate the OrganizationEmployee in the database
        List<OrganizationEmployee> organizationEmployeeList = organizationEmployeeRepository.findAll();
        assertThat(organizationEmployeeList).hasSize(databaseSizeBeforeCreate + 1);
        OrganizationEmployee testOrganizationEmployee = organizationEmployeeList.get(organizationEmployeeList.size() - 1);
        assertThat(testOrganizationEmployee.getRole()).isEqualTo(DEFAULT_ROLE);

        // Validate the OrganizationEmployee in Elasticsearch
        verify(mockOrganizationEmployeeSearchRepository, times(1)).save(testOrganizationEmployee);
    }

    @Test
    @Transactional
    public void createOrganizationEmployeeWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = organizationEmployeeRepository.findAll().size();

        // Create the OrganizationEmployee with an existing ID
        organizationEmployee.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restOrganizationEmployeeMockMvc.perform(post("/api/organization-employees")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(organizationEmployee)))
            .andExpect(status().isBadRequest());

        // Validate the OrganizationEmployee in the database
        List<OrganizationEmployee> organizationEmployeeList = organizationEmployeeRepository.findAll();
        assertThat(organizationEmployeeList).hasSize(databaseSizeBeforeCreate);

        // Validate the OrganizationEmployee in Elasticsearch
        verify(mockOrganizationEmployeeSearchRepository, times(0)).save(organizationEmployee);
    }


    @Test
    @Transactional
    public void getAllOrganizationEmployees() throws Exception {
        // Initialize the database
        organizationEmployeeRepository.saveAndFlush(organizationEmployee);

        // Get all the organizationEmployeeList
        restOrganizationEmployeeMockMvc.perform(get("/api/organization-employees?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(organizationEmployee.getId().intValue())))
            .andExpect(jsonPath("$.[*].role").value(hasItem(DEFAULT_ROLE.toString())));
    }
    
    @Test
    @Transactional
    public void getOrganizationEmployee() throws Exception {
        // Initialize the database
        organizationEmployeeRepository.saveAndFlush(organizationEmployee);

        // Get the organizationEmployee
        restOrganizationEmployeeMockMvc.perform(get("/api/organization-employees/{id}", organizationEmployee.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(organizationEmployee.getId().intValue()))
            .andExpect(jsonPath("$.role").value(DEFAULT_ROLE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingOrganizationEmployee() throws Exception {
        // Get the organizationEmployee
        restOrganizationEmployeeMockMvc.perform(get("/api/organization-employees/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateOrganizationEmployee() throws Exception {
        // Initialize the database
        organizationEmployeeService.save(organizationEmployee);
        // As the test used the service layer, reset the Elasticsearch mock repository
        reset(mockOrganizationEmployeeSearchRepository);

        int databaseSizeBeforeUpdate = organizationEmployeeRepository.findAll().size();

        // Update the organizationEmployee
        OrganizationEmployee updatedOrganizationEmployee = organizationEmployeeRepository.findById(organizationEmployee.getId()).get();
        // Disconnect from session so that the updates on updatedOrganizationEmployee are not directly saved in db
        em.detach(updatedOrganizationEmployee);
        updatedOrganizationEmployee
            .role(UPDATED_ROLE);

        restOrganizationEmployeeMockMvc.perform(put("/api/organization-employees")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedOrganizationEmployee)))
            .andExpect(status().isOk());

        // Validate the OrganizationEmployee in the database
        List<OrganizationEmployee> organizationEmployeeList = organizationEmployeeRepository.findAll();
        assertThat(organizationEmployeeList).hasSize(databaseSizeBeforeUpdate);
        OrganizationEmployee testOrganizationEmployee = organizationEmployeeList.get(organizationEmployeeList.size() - 1);
        assertThat(testOrganizationEmployee.getRole()).isEqualTo(UPDATED_ROLE);

        // Validate the OrganizationEmployee in Elasticsearch
        verify(mockOrganizationEmployeeSearchRepository, times(1)).save(testOrganizationEmployee);
    }

    @Test
    @Transactional
    public void updateNonExistingOrganizationEmployee() throws Exception {
        int databaseSizeBeforeUpdate = organizationEmployeeRepository.findAll().size();

        // Create the OrganizationEmployee

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restOrganizationEmployeeMockMvc.perform(put("/api/organization-employees")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(organizationEmployee)))
            .andExpect(status().isBadRequest());

        // Validate the OrganizationEmployee in the database
        List<OrganizationEmployee> organizationEmployeeList = organizationEmployeeRepository.findAll();
        assertThat(organizationEmployeeList).hasSize(databaseSizeBeforeUpdate);

        // Validate the OrganizationEmployee in Elasticsearch
        verify(mockOrganizationEmployeeSearchRepository, times(0)).save(organizationEmployee);
    }

    @Test
    @Transactional
    public void deleteOrganizationEmployee() throws Exception {
        // Initialize the database
        organizationEmployeeService.save(organizationEmployee);

        int databaseSizeBeforeDelete = organizationEmployeeRepository.findAll().size();

        // Delete the organizationEmployee
        restOrganizationEmployeeMockMvc.perform(delete("/api/organization-employees/{id}", organizationEmployee.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<OrganizationEmployee> organizationEmployeeList = organizationEmployeeRepository.findAll();
        assertThat(organizationEmployeeList).hasSize(databaseSizeBeforeDelete - 1);

        // Validate the OrganizationEmployee in Elasticsearch
        verify(mockOrganizationEmployeeSearchRepository, times(1)).deleteById(organizationEmployee.getId());
    }

    @Test
    @Transactional
    public void searchOrganizationEmployee() throws Exception {
        // Initialize the database
        organizationEmployeeService.save(organizationEmployee);
        when(mockOrganizationEmployeeSearchRepository.search(queryStringQuery("id:" + organizationEmployee.getId())))
            .thenReturn(Collections.singletonList(organizationEmployee));
        // Search the organizationEmployee
        restOrganizationEmployeeMockMvc.perform(get("/api/_search/organization-employees?query=id:" + organizationEmployee.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(organizationEmployee.getId().intValue())))
            .andExpect(jsonPath("$.[*].role").value(hasItem(DEFAULT_ROLE)));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(OrganizationEmployee.class);
        OrganizationEmployee organizationEmployee1 = new OrganizationEmployee();
        organizationEmployee1.setId(1L);
        OrganizationEmployee organizationEmployee2 = new OrganizationEmployee();
        organizationEmployee2.setId(organizationEmployee1.getId());
        assertThat(organizationEmployee1).isEqualTo(organizationEmployee2);
        organizationEmployee2.setId(2L);
        assertThat(organizationEmployee1).isNotEqualTo(organizationEmployee2);
        organizationEmployee1.setId(null);
        assertThat(organizationEmployee1).isNotEqualTo(organizationEmployee2);
    }
}
