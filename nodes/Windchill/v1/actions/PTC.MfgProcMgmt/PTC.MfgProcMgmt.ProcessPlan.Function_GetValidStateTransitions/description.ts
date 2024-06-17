import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessPlanFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
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
					"GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
