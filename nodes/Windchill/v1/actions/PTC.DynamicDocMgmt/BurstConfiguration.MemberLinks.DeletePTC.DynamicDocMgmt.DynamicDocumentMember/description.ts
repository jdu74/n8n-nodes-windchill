import { INodeProperties } from "n8n-workflow";

export const BurstConfigurationMemberLinksDeletePtcDynamicDocMgmtDynamicDocumentMemberDescription: INodeProperties[] = [
	{
		displayName: 'BurstConfigurationId',
		name: 'BurstConfigurationId-string(path)',
		description: 'Burst Configuration ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"DELETE /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
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
					"DELETE /BurstConfigurations('{BurstConfigurationId}')/MemberLinks('{DynamicDocumentMemberId}')",
				],
			},
		},
		required: true,
	},
];
