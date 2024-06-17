import { INodeProperties } from "n8n-workflow";

export const PartDownstreamEquivalanceLinksGetEquivalenceLinkDescription: INodeProperties[] = [
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				description: "Get EquivalenceLink for a given EquivalenceLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
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
					'Part.DownstreamEquivalanceLinks.GetEquivalenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/DownstreamEquivalanceLinks('{EquivalenceLinkId}')",
				],
			},
		},
	},
];
