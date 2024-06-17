import { INodeProperties } from "n8n-workflow";

export const PartMadeFromLinkGetRawMaterialLinkDescription: INodeProperties[] = [
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
				value: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
				action: "GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				description: "Get RawMaterialLink for a given RawMaterialLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RawMaterialLinkId',
		name: 'RawMaterialLinkId-string(path)',
		description: 'Raw Material Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RawMaterialLinkId',
		name: 'RawMaterialLinkId-string(path)',
		description: 'Raw Material Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RawMaterialLinkId',
		name: 'RawMaterialLinkId-string(path)',
		description: 'Raw Material Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RawMaterialLinkId',
		name: 'RawMaterialLinkId-string(path)',
		description: 'Raw Material Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RawMaterialLinkId',
		name: 'RawMaterialLinkId-string(path)',
		description: 'Raw Material Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
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
					'Part.MadeFromLink.GetRawMaterialLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/MadeFromLink('{RawMaterialLinkId}')",
				],
			},
		},
	},
];
