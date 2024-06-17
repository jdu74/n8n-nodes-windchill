import { INodeProperties } from "n8n-workflow";

export const OperationOperationToConsumableLinksDeletePtcMfgProcMgmtOperationToConsumableLinkDescription: INodeProperties[] = [
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
					"DELETE /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationToConsumableLinkId',
		name: 'OperationToConsumableLinkId-string(path)',
		description: 'Operation To Consumable Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Operations('{OperationId}')/OperationToConsumableLinks('{OperationToConsumableLinkId}')",
				],
			},
		},
		required: true,
	},
];
