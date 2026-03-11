/**
 * Case study metadata for experience entries.
 * Each key matches a `caseStudyId` on a job object in Experience.jsx.
 */
export const caseStudies = {
  'ms-migration': {
    title: 'M365 Guest Migration',
    subtitle: 'Microsoft · Microsoft 365 Platform',

    challenge: `Yammer maintained 300,000 "native guest" users outside the M365 identity
model — separate accounts with no Azure AD representation, incompatible with modern
compliance tooling and M365 feature surfaces. The mandate: migrate all of them to full
M365 guest accounts with complete feature parity, zero data loss, and no user-visible
disruption. Every phase had to be idempotent and fully rollback-capable, with automated
health gates preventing a bad batch from cascading across tenants.`,

    result: {
      summary: `Migration executed in rolling tenant batches with automated health-gate checks
between phases. Rollback triggered automatically if any phase exceeded its error-rate
threshold. As a direct by-product of the re-architecture, the M365 → Yammer group-sync
pipeline SLA dropped from 1 day to under 5 minutes — a 288× improvement — and M365
group creation time fell from 5 seconds to under 1 second.`,
      metrics: [
        { value: '300K+', label: 'Users migrated'         },
        { value: '0',     label: 'Reported incidents'     },
        { value: '100%',  label: 'Feature parity'         },
        { value: '288×',  label: 'Sync SLA improvement'   },
      ],
    },
  },
}
