import { INodeProperties } from "n8n-workflow";

export const DeleteProcessPlanDescription: INodeProperties[] = [
	{
		displayName: 'ProcessPlanId',
		name: 'ProcessPlanId-string(path)',
		description: 'Process Plan ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /ProcessPlans('{ProcessPlanId}')",
				],
			},
		},
		required: true,
	},
];
