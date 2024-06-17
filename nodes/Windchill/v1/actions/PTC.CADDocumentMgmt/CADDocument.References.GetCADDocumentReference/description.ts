import { INodeProperties } from "n8n-workflow";

export const CadDocumentReferencesGetCadDocumentReferenceDescription: INodeProperties[] = [
	{
		displayName: 'CADDocumentId',
		name: 'CADDocumentId-string(path)',
		description: 'Cad Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					"GET /CADDocuments('{CADDocumentId}')/References('{CADDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'CADDocumentReferenceId',
		name: 'CADDocumentReferenceId-string(path)',
		description: 'Cad Document Reference ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.CADDocumentMgmt',
				],
				operation: [
					"GET /CADDocuments('{CADDocumentId}')/References('{CADDocumentReferenceId}')",
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
					'PTC.CADDocumentMgmt',
				],
				operation: [
					"GET /CADDocuments('{CADDocumentId}')/References('{CADDocumentReferenceId}')",
				],
			},
		},
	},
];
