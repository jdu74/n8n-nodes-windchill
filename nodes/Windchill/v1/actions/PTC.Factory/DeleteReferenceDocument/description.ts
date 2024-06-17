import { INodeProperties } from "n8n-workflow";

export const DeleteReferenceDocumentDescription: INodeProperties[] = [
	{
		displayName: 'ReferenceDocumentId',
		name: 'ReferenceDocumentId-string(path)',
		description: 'Reference Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /ReferenceDocuments('{ReferenceDocumentId}')",
				],
			},
		},
		required: true,
	},
];
