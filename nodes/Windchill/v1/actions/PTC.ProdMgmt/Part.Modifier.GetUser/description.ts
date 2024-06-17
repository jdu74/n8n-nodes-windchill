import { INodeProperties } from "n8n-workflow";

export const PartModifierGetUserDescription: INodeProperties[] = [
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
					'Part.Modifier.GetUser',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Modifier",
		options: [
			{
				name: "GET /Parts('{PartId}')/Modifier",
				value: "GET /Parts('{PartId}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/Modifier",
				action: "GET /Parts('{PartId}')/Modifier",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
				description: "Get User - get /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
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
					'Part.Modifier.GetUser',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Modifier",
				],
			},
		},
	},
];
