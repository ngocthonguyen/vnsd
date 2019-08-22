package io.github.jhipster.application.service.impl;

import io.github.jhipster.application.service.OrganizationService;
import io.github.jhipster.application.domain.Organization;
import io.github.jhipster.application.repository.OrganizationRepository;
import io.github.jhipster.application.repository.search.OrganizationSearchRepository;
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
 * Service Implementation for managing {@link Organization}.
 */
@Service
@Transactional
public class OrganizationServiceImpl implements OrganizationService {

    private final Logger log = LoggerFactory.getLogger(OrganizationServiceImpl.class);

    private final OrganizationRepository organizationRepository;

    private final OrganizationSearchRepository organizationSearchRepository;

    public OrganizationServiceImpl(OrganizationRepository organizationRepository, OrganizationSearchRepository organizationSearchRepository) {
        this.organizationRepository = organizationRepository;
        this.organizationSearchRepository = organizationSearchRepository;
    }

    /**
     * Save a organization.
     *
     * @param organization the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Organization save(Organization organization) {
        log.debug("Request to save Organization : {}", organization);
        Organization result = organizationRepository.save(organization);
        organizationSearchRepository.save(result);
        return result;
    }

    /**
     * Get all the organizations.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Organization> findAll() {
        log.debug("Request to get all Organizations");
        return organizationRepository.findAll();
    }


    /**
     * Get one organization by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Organization> findOne(Long id) {
        log.debug("Request to get Organization : {}", id);
        return organizationRepository.findById(id);
    }

    /**
     * Delete the organization by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Organization : {}", id);
        organizationRepository.deleteById(id);
        organizationSearchRepository.deleteById(id);
    }

    /**
     * Search for the organization corresponding to the query.
     *
     * @param query the query of the search.
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<Organization> search(String query) {
        log.debug("Request to search Organizations for query {}", query);
        return StreamSupport
            .stream(organizationSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}
