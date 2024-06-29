import { INodeProperties } from "n8n-workflow";

export const DeleteBacReceivedDeliveryDescription: INodeProperties[] = [
	{
		displayName: 'BACReceivedDeliveryId',
		name: 'BACReceivedDeliveryId-string(path)',
		description: 'Bac Received Delivery ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					"DELETE /BACReceivedDeliveries('{BACReceivedDeliveryId}')",
				],
			},
		},
		required: true,
	},
];
