import { INodeProperties } from "n8n-workflow";

export const PartUsedByGetPartDescription: INodeProperties[] = [
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
					'Part.UsedBy.GetPart',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')",
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/UsedBy('{UsedById}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
				description: "Get Part for a given UsedById - get /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
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
					'Part.UsedBy.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/UsedBy('{UsedById}')",
				],
			},
		},
	},
];
