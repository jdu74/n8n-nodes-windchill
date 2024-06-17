import { INodeProperties } from "n8n-workflow";

export const PartEffectivitiesGetEffectivityDescription: INodeProperties[] = [
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
					'Part.Effectivities.GetEffectivity',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
				value: "GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/Effectivities('{EffectivityId}')",
				action: "GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
				description: "Get Effectivity for a given EffectivityId - get /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EffectivityId',
		name: 'EffectivityId-string(path)',
		description: 'Effectivity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EffectivityId',
		name: 'EffectivityId-string(path)',
		description: 'Effectivity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EffectivityId',
		name: 'EffectivityId-string(path)',
		description: 'Effectivity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EffectivityId',
		name: 'EffectivityId-string(path)',
		description: 'Effectivity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'EffectivityId',
		name: 'EffectivityId-string(path)',
		description: 'Effectivity ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
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
					'Part.Effectivities.GetEffectivity',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Effectivities('{EffectivityId}')",
				],
			},
		},
	},
];
