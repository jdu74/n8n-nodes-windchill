import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeOrderFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'ChangeOrderId',
		name: 'ChangeOrderId-string(path)',
		description: 'Change Order ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
