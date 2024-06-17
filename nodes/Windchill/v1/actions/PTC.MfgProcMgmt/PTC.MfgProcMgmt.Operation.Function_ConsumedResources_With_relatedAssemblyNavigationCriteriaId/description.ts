import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationFunctionConsumedResourcesWithRelatedAssemblyNavigationCriteriaIdDescription: INodeProperties[] = [
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
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedResources(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'processPlanNavigationCriteriaId',
		name: 'processPlanNavigationCriteriaId-string(path)',
		description: 'Process Plan Navigation Criteria ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedResources(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'relatedAssemblyNavigationCriteriaId',
		name: 'relatedAssemblyNavigationCriteriaId-string(path)',
		description: 'Related Assembly Navigation Criteria ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.ConsumedResources(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
