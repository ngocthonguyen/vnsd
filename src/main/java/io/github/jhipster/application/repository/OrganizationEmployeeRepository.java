package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.OrganizationEmployee;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the OrganizationEmployee entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrganizationEmployeeRepository extends JpaRepository<OrganizationEmployee, Long> {

}
