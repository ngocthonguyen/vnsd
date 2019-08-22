package io.github.jhipster.application.repository.search;

import io.github.jhipster.application.domain.OrganizationEmployee;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link OrganizationEmployee} entity.
 */
public interface OrganizationEmployeeSearchRepository extends ElasticsearchRepository<OrganizationEmployee, Long> {
}
