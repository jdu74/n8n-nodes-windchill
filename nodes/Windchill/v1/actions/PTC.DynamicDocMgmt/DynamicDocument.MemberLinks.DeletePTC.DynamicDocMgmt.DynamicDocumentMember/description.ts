import { INodeProperties } from "n8n-workflow";

export const DynamicDocumentMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMemberDescription: INodeProperties[] = [
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
					"DELETE /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
					"DELETE /DynamicDocuments('{DynamicDocumentId}')/MemberLinks('{DynamicDocumentMemberId}')",
				],
			},
		},
		required: true,
	},
];
