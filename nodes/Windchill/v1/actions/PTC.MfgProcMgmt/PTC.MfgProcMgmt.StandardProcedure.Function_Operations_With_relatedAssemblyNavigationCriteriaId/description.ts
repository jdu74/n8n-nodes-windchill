import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtStandardProcedureFunctionOperationsWithRelatedAssemblyNavigationCriteriaIdDescription: INodeProperties[] = [
	{
		displayName: 'StandardProcedureId',
		name: 'StandardProcedureId-string(path)',
		description: 'Standard Procedure ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
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
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
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
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.Operations(processPlanNavigationCriteriaId='{processPlanNavigationCriteriaId}',relatedAssemblyNavigationCriteriaId='{relatedAssemblyNavigationCriteriaId}')",
				],
			},
		},
		required: true,
	},
];
