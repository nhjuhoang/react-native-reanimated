#import "ReanimatedSensorContainer.h"
#import <CoreMotion/CoreMotion.h>
#import <Foundation/Foundation.h>
#import "ReanimatedSensor.h"

static NSNumber *_nextSensorId = nil;

@implementation ReanimatedSensorContainer

- (instancetype)init
{
  self = [super init];
  _sensors = [[NSMutableDictionary alloc] init];
  _nextSensorId = @0;
  return self;
}

- (int)registerSensor:(ReanimatedSensorType)sensorType interval:(int)interval setter:(void (^)(double[]))setter
{
  ReanimatedSensor *sensor = [[ReanimatedSensor alloc] init:sensorType interval:interval setter:setter];
  if ([sensor initialize]) {
    NSNumber *sensorId = [_nextSensorId copy];
    _nextSensorId = [NSNumber numberWithInt:[_nextSensorId intValue] + 1];
    [_sensors setObject:sensor forKey:sensorId];
    return [sensorId intValue];
  } else {
    return -1;
  }
}

- (void)unregisterSensor:(int)sensorId
{
  NSNumber *_sensorId = [NSNumber numberWithInt:sensorId];
  if (_sensors[_sensorId] == nil) {
    return;
  }
  [_sensors[_sensorId] cancel];
  [_sensors removeObjectForKey:_sensorId];
}

@end
