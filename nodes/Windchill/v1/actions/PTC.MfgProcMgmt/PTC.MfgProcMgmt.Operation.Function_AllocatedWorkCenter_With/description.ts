import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationFunctionAllocatedWorkCenterWithDescription: INodeProperties[] = [
	{
		displayName: 'OperationId',
		name: 'OperationId-string(path)',
		description: 'Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.AllocatedWorkCenter(navigationCriteriaId='{navigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'navigationCriteriaId',
		name: 'navigationCriteriaId-string(path)',
		description: 'Navigation Criteria ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.AllocatedWorkCenter(navigationCriteriaId='{navigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
