import { INodeProperties } from "n8n-workflow";

export const NoteMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMemberDescription: INodeProperties[] = [
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
					"DELETE /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'DynamicDocumentMemberId',
		name: 'DynamicDocumentMemberId-string(path)',
		description: 'Dynamic Document Member ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"DELETE /Notes('{NoteId}')/MemberLinks('{DynamicDocumentMemberId}')",
				],
			},
		},
		required: true,
	},
];
