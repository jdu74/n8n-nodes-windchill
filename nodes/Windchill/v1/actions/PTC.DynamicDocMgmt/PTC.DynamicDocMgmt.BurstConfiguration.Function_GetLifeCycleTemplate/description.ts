import { INodeProperties } from "n8n-workflow";

export const PtcDynamicDocMgmtBurstConfigurationFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
