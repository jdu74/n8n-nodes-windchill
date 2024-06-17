import { INodeProperties } from "n8n-workflow";

export const DocumentRepresentationsGetRepresentationDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /Documents('{DocumentId}')/Representations('{RepresentationId}')",
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
					'PTC.Factory',
				],
				operation: [
					"GET /Documents('{DocumentId}')/Representations('{RepresentationId}')",
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
					'PTC.Factory',
				],
				operation: [
					"GET /Documents('{DocumentId}')/Representations('{RepresentationId}')",
				],
			},
		},
	},
];
