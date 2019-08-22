package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.OrganizationEmployeeService;
import io.github.jhipster.application.domain.OrganizationEmployee;
import io.github.jhipster.application.repository.OrganizationEmployeeRepository;
import io.github.jhipster.application.repository.search.OrganizationEmployeeSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing {@link OrganizationEmployee}.
 */
@Service
@Transactional
public class OrganizationEmployeeServiceImpl implements OrganizationEmployeeService {

    private final Logger log = LoggerFactory.getLogger(OrganizationEmployeeServiceImpl.class);

    private final OrganizationEmployeeRepository organizationEmployeeRepository;

    private final OrganizationEmployeeSearchRepository organizationEmployeeSearchRepository;

    public OrganizationEmployeeServiceImpl(OrganizationEmployeeRepository organizationEmployeeRepository, OrganizationEmployeeSearchRepository organizationEmployeeSearchRepository) {
        this.organizationEmployeeRepository = organizationEmployeeRepository;
        this.organizationEmployeeSearchRepository = organizationEmployeeSearchRepository;
    }

    /**
     * Save a organizationEmployee.
     *
     * @param organizationEmployee the entity to save.
     * @return the persisted entity.
     */
    @Override
    public OrganizationEmployee save(OrganizationEmployee organizationEmployee) {
        log.debug("Request to save OrganizationEmployee : {}", organizationEmployee);
        OrganizationEmployee result = organizationEmployeeRepository.save(organizationEmployee);
        organizationEmployeeSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the organizationEmployees.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<OrganizationEmployee> findAll() {
        log.debug("Request to get all OrganizationEmployees");
        return organizationEmployeeRepository.findAll();
    }


    /**
     * Get one organizationEmployee by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<OrganizationEmployee> findOne(Long id) {
        log.debug("Request to get OrganizationEmployee : {}", id);
        return organizationEmployeeRepository.findById(id);
    }

    /**
     * Delete the organizationEmployee by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OrganizationEmployee : {}", id);
        organizationEmployeeRepository.deleteById(id);
        organizationEmployeeSearchRepository.deleteById(id);
    }

    /**
     * Search for the organizationEmployee corresponding to the query.
     *
     * @param query the query of the search.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<OrganizationEmployee> search(String query) {
        log.debug("Request to search OrganizationEmployees for query {}", query);
        return StreamSupport
            .stream(organizationEmployeeSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
