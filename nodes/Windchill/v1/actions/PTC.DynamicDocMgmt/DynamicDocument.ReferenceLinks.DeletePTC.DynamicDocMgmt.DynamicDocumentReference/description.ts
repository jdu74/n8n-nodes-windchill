import { INodeProperties } from "n8n-workflow";

export const DynamicDocumentReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReferenceDescription: INodeProperties[] = [
	{
		displayName: 'DynamicDocumentId',
		name: 'DynamicDocumentId-string(path)',
		description: 'Dynamic Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"DELETE /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DynamicDocumentReferenceId',
		name: 'DynamicDocumentReferenceId-string(path)',
		description: 'Dynamic Document Reference ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"DELETE /DynamicDocuments('{DynamicDocumentId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
];
