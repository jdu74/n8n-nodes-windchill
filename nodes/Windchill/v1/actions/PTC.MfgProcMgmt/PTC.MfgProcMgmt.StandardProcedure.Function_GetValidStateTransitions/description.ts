import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtStandardProcedureFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
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
					"GET /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
