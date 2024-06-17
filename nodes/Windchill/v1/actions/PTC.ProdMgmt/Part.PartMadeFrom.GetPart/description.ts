import { INodeProperties } from "n8n-workflow";

export const PartPartMadeFromGetPartDescription: INodeProperties[] = [
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
					'Part.PartMadeFrom.GetPart',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
				description: "Get Part for a given PartMadeFromId - get /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
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
					'Part.PartMadeFrom.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartMadeFrom('{PartMadeFromId}')",
				],
			},
		},
	},
];
