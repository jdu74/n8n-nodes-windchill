import { INodeProperties } from "n8n-workflow";

export const PartModuleVariantInformationLinksGetModuleVariantInformationLinksDescription: INodeProperties[] = [
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
			},
		},
		default: "GET /Parts('{PartId}')/ModuleVariantInformationLinks",
		options: [
			{
				name: "GET /Parts('{PartId}')/ModuleVariantInformationLinks",
				value: "GET /Parts('{PartId}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/ModuleVariantInformationLinks",
				action: "GET /Parts('{PartId}')/ModuleVariantInformationLinks",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
				description: "Get ModuleVariantInformationLink - get /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLinks',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks",
				],
			},
		},
	},
];
