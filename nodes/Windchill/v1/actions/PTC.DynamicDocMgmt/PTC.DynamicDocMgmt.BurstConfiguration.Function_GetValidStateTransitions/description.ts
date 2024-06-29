import { INodeProperties } from "n8n-workflow";

export const PtcDynamicDocMgmtBurstConfigurationFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
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
					"GET /BurstConfigurations('{BurstConfigurationId}')/PTC.DynamicDocMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
