import { INodeProperties } from "n8n-workflow";

export const PartModuleVariantInformationLinksGetModuleVariantInformationLinkDescription: INodeProperties[] = [
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				value: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: "GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				description: "Get ModuleVariantInformationLink for a given ModuleVariantInformationLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ModuleVariantInformationLinkId',
		name: 'ModuleVariantInformationLinkId-string(path)',
		description: 'Module Variant Information Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ModuleVariantInformationLinkId',
		name: 'ModuleVariantInformationLinkId-string(path)',
		description: 'Module Variant Information Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ModuleVariantInformationLinkId',
		name: 'ModuleVariantInformationLinkId-string(path)',
		description: 'Module Variant Information Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ModuleVariantInformationLinkId',
		name: 'ModuleVariantInformationLinkId-string(path)',
		description: 'Module Variant Information Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ModuleVariantInformationLinkId',
		name: 'ModuleVariantInformationLinkId-string(path)',
		description: 'Module Variant Information Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
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
					'Part.ModuleVariantInformationLinks.GetModuleVariantInformationLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/ModuleVariantInformationLinks('{ModuleVariantInformationLinkId}')",
				],
			},
		},
	},
];
