import { INodeProperties } from "n8n-workflow";

export const NoteReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReferenceDescription: INodeProperties[] = [
	{
		displayName: 'NoteId',
		name: 'NoteId-string(path)',
		description: 'Note ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"DELETE /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
					"DELETE /Notes('{NoteId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
];
