import { INodeProperties } from "n8n-workflow";

export const PartUpstreamEquivalanceLinksGetEquivalenceLinkDescription: INodeProperties[] = [
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartMadeFromId',
		name: 'PartMadeFromId-string(path)',
		description: 'Part Made From ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RevisionsId',
		name: 'RevisionsId-string(path)',
		description: 'Revisions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'UsedById',
		name: 'UsedById-string(path)',
		description: 'Used By ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'VersionsId',
		name: 'VersionsId-string(path)',
		description: 'Versions ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
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
					'Part.UpstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UpstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
	},
];
