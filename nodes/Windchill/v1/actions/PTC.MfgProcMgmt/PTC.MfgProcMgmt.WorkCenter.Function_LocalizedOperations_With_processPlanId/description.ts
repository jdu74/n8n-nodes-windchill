import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtWorkCenterFunctionLocalizedOperationsWithProcessPlanIdDescription: INodeProperties[] = [
	{
		displayName: 'WorkCenterId',
		name: 'WorkCenterId-string(path)',
		description: 'Work Center ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.LocalizedOperations(navigationCriteriaId='{navigationCriteriaId}',processPlanId='{processPlanId}')",
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
					"GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.LocalizedOperations(navigationCriteriaId='{navigationCriteriaId}',processPlanId='{processPlanId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'processPlanId',
		name: 'processPlanId-string(path)',
		description: 'Process Plan ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.LocalizedOperations(navigationCriteriaId='{navigationCriteriaId}',processPlanId='{processPlanId}')",
				],
			},
		},
		required: true,
	},
];
