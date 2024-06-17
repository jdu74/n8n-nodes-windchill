import { INodeProperties } from "n8n-workflow";

export const StandardProcedureOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLinkDescription: INodeProperties[] = [
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
					"DELETE /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
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
					"DELETE /StandardProcedures('{StandardProcedureId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
];
