import { INodeProperties } from "n8n-workflow";

export const PartRepresentationsGetRepresentationDescription: INodeProperties[] = [
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
					'Part.Representations.GetRepresentation',
				],
			},
		},
		default: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
		options: [
			{
				name: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
				value: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
				action: "GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Representations('{RepresentationId}')",
				value: "GET /Parts('{PartId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/Representations('{RepresentationId}')",
				action: "GET /Parts('{PartId}')/Representations('{RepresentationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
				value: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
				action: "GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
				value: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
				action: "GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
			},
			{
				name: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
				value: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
				description: "Get Representation for a given RepresentationId - get /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
				action: "GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/PartMadeFrom('{PartMadeFromId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Representations('{RepresentationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Revisions('{RevisionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/UsedBy('{UsedById}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'RepresentationId',
		name: 'RepresentationId-string(path)',
		description: 'Representation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
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
					'Part.Representations.GetRepresentation',
				],
				path: [
					"GET /Parts('{PartId}')/Versions('{VersionsId}')/Representations('{RepresentationId}')",
				],
			},
		},
	},
];
