// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      items: [
        {
          id: 'intro/getting_started',
          type: 'doc',
        },
        {
          id: 'intro/dev-portal',
          type: 'doc',
        },
        {
          id: 'intro/vision',
          type: 'doc',
        },
        {
          id: 'intro/concepts',
          type: 'doc',
        },
      ],
      label: 'Introduction',
      type: 'category',
    },
    {
      collapsed: true,
      items: [
        {
          id: 'infrastructure/infrastructure_architecture',
          type: 'doc',
        },
      ],
      label: 'Infrastructure',
      type: 'category',
    },
    {
      collapsed: true,
      items: [
        {
          id: 'architecture/high_level_vision',
          type: 'doc',
        },
        {
          id: 'architecture/fast_data',
          type: 'doc',
        },
        {
          id: 'architecture/data_ingestion',
          type: 'doc',
        },
        {
          id: 'architecture/single_views',
          type: 'doc',
        },
        {
          id: 'architecture/api',
          type: 'doc',
        },
        {
          id: 'architecture/idp',
          type: 'doc',
        },
        {
          id: 'architecture/technologies',
          type: 'doc',
        },
        {
          id: 'architecture/sizing',
          type: 'doc',
        },
      ],
      label: 'Architecture',
      type: 'category',
    },
    {
      collapsed: true,
      items: [
        {
          id: 'dev-ops/intro',
          type: 'doc',
        },
        {
          id: 'dev-ops/git_flow',
          type: 'doc',
        },
        {
          id: 'dev-ops/pipelines',
          type: 'doc',
        },
        {
          id: 'dev-ops/monitoring',
          type: 'doc',
        },
      ],
      label: 'DevOps',
      type: 'category',
    },
    {
      collapsed: true,
      items: [
        {
          id: 'governance/intro',
          type: 'doc',
        },
        {
          id: 'governance/team',
          type: 'doc',
        },
        {
          id: 'governance/processes_metrics',
          type: 'doc',
        },
      ],
      label: 'Governance',
      type: 'category',
    },
    {
      collapsed: true,
      items: [
        {
          id: 'guidelines/development',
          type: 'doc',
        },
        {
          id: 'guidelines/microservices_principles',
          type: 'doc',
        },
        {
          id: 'guidelines/sc_quality_management',
          type: 'doc',
        },
        {
          id: 'guidelines/logging',
          type: 'doc',
        },
        {
          id: 'guidelines/git_ops',
          type: 'doc',
        },
        {
          id: 'guidelines/monitoring',
          type: 'doc',
        },
        {
          id: 'guidelines/architecture',
          type: 'doc',
        },
        {
          id: 'guidelines/cloud_native',
          type: 'doc',
        },
        {
          id: 'guidelines/kubernetes',
          type: 'doc',
        },
      ],
      label: 'Guidelines',
      type: 'category',
    },
    {
      id: 'contribute/contribute',
      type: 'doc',
    },
  ],
}

module.exports = sidebars
