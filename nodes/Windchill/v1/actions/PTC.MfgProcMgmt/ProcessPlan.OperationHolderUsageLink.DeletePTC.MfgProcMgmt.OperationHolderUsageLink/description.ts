import { INodeProperties } from "n8n-workflow";

export const ProcessPlanOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLinkDescription: INodeProperties[] = [
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
					"DELETE /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationHolderUsageLinkId',
		name: 'OperationHolderUsageLinkId-string(path)',
		description: 'Operation Holder Usage Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /ProcessPlans('{ProcessPlanId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
];
