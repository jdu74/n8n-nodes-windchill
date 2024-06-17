import { INodeProperties } from "n8n-workflow";

export const DeleteDocumentDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					"DELETE /Documents('{DocumentId}')",
				],
			},
		},
		required: true,
	},
];
