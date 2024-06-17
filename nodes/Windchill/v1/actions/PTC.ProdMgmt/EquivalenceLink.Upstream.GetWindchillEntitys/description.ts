import { INodeProperties } from "n8n-workflow";

export const EquivalenceLinkUpstreamGetWindchillEntitysDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
			},
		},
		default: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
		options: [
			{
				name: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				value: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				description: "Get WindchillEntity - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				action: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
			},
			{
				name: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				value: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				description: "Get WindchillEntity - get /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				action: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
			},
		],
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EquivalenceLinkId',
		name: 'EquivalenceLinkId-string(path)',
		description: 'Equivalence Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
	},
	{
		displayName: 'PartId',
		name: 'PartId-string(path)',
		description: 'Part ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EquivalenceLinkId',
		name: 'EquivalenceLinkId-string(path)',
		description: 'Equivalence Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'EquivalenceLink.Upstream.GetWindchillEntitys',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')/Upstream",
				],
			},
		},
	},
];
