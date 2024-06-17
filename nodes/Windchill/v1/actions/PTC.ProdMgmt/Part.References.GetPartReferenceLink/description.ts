import { INodeProperties } from "n8n-workflow";

export const PartReferencesGetPartReferenceLinkDescription: INodeProperties[] = [
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
					'Part.References.GetPartReferenceLink',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
				value: "GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/References('{PartReferenceLinkId}')",
				action: "GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
				description: "Get PartReferenceLink for a given PartReferenceLinkId - get /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartReferenceLinkId',
		name: 'PartReferenceLinkId-string(path)',
		description: 'Part Reference Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartReferenceLinkId',
		name: 'PartReferenceLinkId-string(path)',
		description: 'Part Reference Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartReferenceLinkId',
		name: 'PartReferenceLinkId-string(path)',
		description: 'Part Reference Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartReferenceLinkId',
		name: 'PartReferenceLinkId-string(path)',
		description: 'Part Reference Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartReferenceLinkId',
		name: 'PartReferenceLinkId-string(path)',
		description: 'Part Reference Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
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
					'Part.References.GetPartReferenceLink',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/References('{PartReferenceLinkId}')",
				],
			},
		},
	},
];
