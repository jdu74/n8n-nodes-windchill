import { INodeProperties } from "n8n-workflow";

export const PartUsesGetPartUseDescription: INodeProperties[] = [
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
					'Part.Uses.GetPartUse',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Uses('{PartUseId}')",
				value: "GET /Parts('{PartId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/Uses('{PartUseId}')",
				action: "GET /Parts('{PartId}')/Uses('{PartUseId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				description: "Get PartUse for a given PartUseId - get /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
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
					'Part.Uses.GetPartUse',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Uses('{PartUseId}')",
				],
			},
		},
	},
];
