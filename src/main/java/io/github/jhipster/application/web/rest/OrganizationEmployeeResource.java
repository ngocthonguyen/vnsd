package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.domain.OrganizationEmployee;
import io.github.jhipster.application.service.OrganizationEmployeeService;
import io.github.jhipster.application.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing {@link io.github.jhipster.application.domain.OrganizationEmployee}.
 */
@RestController
@RequestMapping("/api")
public class OrganizationEmployeeResource {

    private final Logger log = LoggerFactory.getLogger(OrganizationEmployeeResource.class);

    private static final String ENTITY_NAME = "organizationEmployee";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final OrganizationEmployeeService organizationEmployeeService;

    public OrganizationEmployeeResource(OrganizationEmployeeService organizationEmployeeService) {
        this.organizationEmployeeService = organizationEmployeeService;
    }

    /**
     * {@code POST  /organization-employees} : Create a new organizationEmployee.
     *
     * @param organizationEmployee the organizationEmployee to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new organizationEmployee, or with status {@code 400 (Bad Request)} if the organizationEmployee has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/organization-employees")
    public ResponseEntity<OrganizationEmployee> createOrganizationEmployee(@RequestBody OrganizationEmployee organizationEmployee) throws URISyntaxException {
        log.debug("REST request to save OrganizationEmployee : {}", organizationEmployee);
        if (organizationEmployee.getId() != null) {
            throw new BadRequestAlertException("A new organizationEmployee cannot already have an ID", ENTITY_NAME, "idexists");
        }
        OrganizationEmployee result = organizationEmployeeService.save(organizationEmployee);
        return ResponseEntity.created(new URI("/api/organization-employees/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /organization-employees} : Updates an existing organizationEmployee.
     *
     * @param organizationEmployee the organizationEmployee to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated organizationEmployee,
     * or with status {@code 400 (Bad Request)} if the organizationEmployee is not valid,
     * or with status {@code 500 (Internal Server Error)} if the organizationEmployee couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/organization-employees")
    public ResponseEntity<OrganizationEmployee> updateOrganizationEmployee(@RequestBody OrganizationEmployee organizationEmployee) throws URISyntaxException {
        log.debug("REST request to update OrganizationEmployee : {}", organizationEmployee);
        if (organizationEmployee.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        OrganizationEmployee result = organizationEmployeeService.save(organizationEmployee);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, organizationEmployee.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /organization-employees} : get all the organizationEmployees.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of organizationEmployees in body.
     */
    @GetMapping("/organization-employees")
    public List<OrganizationEmployee> getAllOrganizationEmployees() {
        log.debug("REST request to get all OrganizationEmployees");
        return organizationEmployeeService.findAll();
    }

    /**
     * {@code GET  /organization-employees/:id} : get the "id" organizationEmployee.
     *
     * @param id the id of the organizationEmployee to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the organizationEmployee, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/organization-employees/{id}")
    public ResponseEntity<OrganizationEmployee> getOrganizationEmployee(@PathVariable Long id) {
        log.debug("REST request to get OrganizationEmployee : {}", id);
        Optional<OrganizationEmployee> organizationEmployee = organizationEmployeeService.findOne(id);
        return ResponseUtil.wrapOrNotFound(organizationEmployee);
    }

    /**
     * {@code DELETE  /organization-employees/:id} : delete the "id" organizationEmployee.
     *
     * @param id the id of the organizationEmployee to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/organization-employees/{id}")
    public ResponseEntity<Void> deleteOrganizationEmployee(@PathVariable Long id) {
        log.debug("REST request to delete OrganizationEmployee : {}", id);
        organizationEmployeeService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    /**
     * {@code SEARCH  /_search/organization-employees?query=:query} : search for the organizationEmployee corresponding
     * to the query.
     *
     * @param query the query of the organizationEmployee search.
     * @return the result of the search.
     */
    @GetMapping("/_search/organization-employees")
    public List<OrganizationEmployee> searchOrganizationEmployees(@RequestParam String query) {
        log.debug("REST request to search OrganizationEmployees for query {}", query);
        return organizationEmployeeService.search(query);
    }

}
