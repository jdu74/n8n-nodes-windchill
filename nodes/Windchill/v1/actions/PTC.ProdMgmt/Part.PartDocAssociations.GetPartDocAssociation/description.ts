import { INodeProperties } from "n8n-workflow";

export const PartPartDocAssociationsGetPartDocAssociationDescription: INodeProperties[] = [
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
				value: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: "GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				description: "Get PartDocAssociation for a given PartDocAssociationId - get /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartDocAssociationId',
		name: 'PartDocAssociationId-string(path)',
		description: 'Part Doc Association ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
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
					'Part.PartDocAssociations.GetPartDocAssociation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/PartDocAssociations('{PartDocAssociationId}')",
				],
			},
		},
	},
];
