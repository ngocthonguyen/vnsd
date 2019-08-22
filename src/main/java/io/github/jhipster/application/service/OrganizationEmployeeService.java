package io.github.jhipster.application.service;

import io.github.jhipster.application.domain.OrganizationEmployee;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link OrganizationEmployee}.
 */
public interface OrganizationEmployeeService {

    /**
     * Save a organizationEmployee.
     *
     * @param organizationEmployee the entity to save.
     * @return the persisted entity.
     */
    OrganizationEmployee save(OrganizationEmployee organizationEmployee);

    /**
     * Get all the organizationEmployees.
     *
     * @return the list of entities.
     */
    List<OrganizationEmployee> findAll();


    /**
     * Get the "id" organizationEmployee.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<OrganizationEmployee> findOne(Long id);

    /**
     * Delete the "id" organizationEmployee.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

    /**
     * Search for the organizationEmployee corresponding to the query.
     *
     * @param query the query of the search.
     * 
     * @return the list of entities.
     */
    List<OrganizationEmployee> search(String query);
}
