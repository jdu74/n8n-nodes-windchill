import { INodeProperties } from "n8n-workflow";

export const BurstConfigurationReferenceLinksDeletePtcDynamicDocMgmtDynamicDocumentReferenceDescription: INodeProperties[] = [
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
					"DELETE /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
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
					"DELETE /BurstConfigurations('{BurstConfigurationId}')/ReferenceLinks('{DynamicDocumentReferenceId}')",
				],
			},
		},
		required: true,
	},
];
