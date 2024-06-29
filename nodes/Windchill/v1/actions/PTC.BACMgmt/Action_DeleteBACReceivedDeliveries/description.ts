import { INodeProperties } from "n8n-workflow";

export const ActionDeleteBacReceivedDeliveriesDescription: INodeProperties[] = [
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /DeleteBACReceivedDeliveries',
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /DeleteBACReceivedDeliveries',
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '* BACReceivedDeliveries',
				name: 'BACReceivedDeliveries',
				description: 'Bac Received Deliveries - array',
				type: 'json',
				default: '[\n\t{\n\t\t"ID": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /DeleteBACReceivedDeliveries',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"BACReceivedDeliveries": [\n\t\t{\n\t\t\t"ID": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /DeleteBACReceivedDeliveries',
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
