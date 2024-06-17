import { INodeProperties } from "n8n-workflow";

export const PartExtendedDataGetExtendedDataDescription: INodeProperties[] = [
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
					'Part.ExtendedData.GetExtendedData',
				],
			},
		},
		default: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
				value: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
				action: "GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
				description: "Get ExtendedData for a given ExtendedDataId - get /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
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
					'Part.ExtendedData.GetExtendedData',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ExtendedData('{ExtendedDataId}')",
				],
			},
		},
	},
];
