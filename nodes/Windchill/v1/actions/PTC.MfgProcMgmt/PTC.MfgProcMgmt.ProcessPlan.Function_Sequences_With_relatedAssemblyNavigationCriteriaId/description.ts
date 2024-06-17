import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessPlanFunctionSequencesWithRelatedAssemblyNavigationCriteriaIdDescription: INodeProperties[] = [
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
					"GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
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
					"GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
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
					"GET /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.Sequences(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
