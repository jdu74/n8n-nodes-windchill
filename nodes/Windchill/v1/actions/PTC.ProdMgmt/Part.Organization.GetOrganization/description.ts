import { INodeProperties } from "n8n-workflow";

export const PartOrganizationGetOrganizationDescription: INodeProperties[] = [
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
					'Part.Organization.GetOrganization',
				],
			},
		},
		default: "GET /Parts('{PartId}')/Organization",
		options: [
			{
				name: "GET /Parts('{PartId}')/Organization",
				value: "GET /Parts('{PartId}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/Organization",
				action: "GET /Parts('{PartId}')/Organization",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
				description: "Get Organization - get /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Organization",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
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
					'Part.Organization.GetOrganization',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Organization",
				],
			},
		},
	},
];
