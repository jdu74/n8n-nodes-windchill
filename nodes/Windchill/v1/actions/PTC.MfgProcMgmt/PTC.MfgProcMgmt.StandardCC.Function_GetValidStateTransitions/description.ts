import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtStandardCcFunctionGetValidStateTransitionsDescription: INodeProperties[] = [
	{
		displayName: 'StandardCCId',
		name: 'StandardCCId-string(path)',
		description: 'Standard Cc ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /StandardCCs('{StandardCCId}')/PTC.MfgProcMgmt.GetValidStateTransitions()",
				],
			},
		},
		required: true,
	},
];
