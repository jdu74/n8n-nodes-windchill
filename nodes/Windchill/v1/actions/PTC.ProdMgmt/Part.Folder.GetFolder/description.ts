import { INodeProperties } from "n8n-workflow";

export const PartFolderGetFolderDescription: INodeProperties[] = [
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
					'Part.Folder.GetFolder',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Folder",
		options: [
			{
				name: "GET /Parts('{PartId}')/Folder",
				value: "GET /Parts('{PartId}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/Folder",
				action: "GET /Parts('{PartId}')/Folder",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
				description: "Get Folder - get /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
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
					'Part.Folder.GetFolder',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Folder",
				],
			},
		},
	},
];
