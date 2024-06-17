import { INodeProperties } from "n8n-workflow";

export const PartRevisionsGetPartDescription: INodeProperties[] = [
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
					'Part.Revisions.GetPart',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/Revisions('{RevisionsId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
				description: "Get Part for a given RevisionsId - get /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
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
					'Part.Revisions.GetPart',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Revisions('{RevisionsId}')",
				],
			},
		},
	},
];
